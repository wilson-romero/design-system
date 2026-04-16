/**
 * Tree manipulation utilities for hierarchical data structures
 */

interface TreeNodeBase {
  id: string
  children?: TreeNodeBase[]
}

interface FlatItem {
  id: string
  parentId?: string | null
  [key: string]: unknown
}

/**
 * Build a tree structure from a flat list of items with parent references
 *
 * @param flatItems - Array of items with parentId field
 * @param parentId - Parent ID to start building from (null for root)
 * @returns Tree-structured array
 *
 * @example
 * const flat = [
 *   { id: '1', name: 'Root', parentId: null },
 *   { id: '2', name: 'Child', parentId: '1' }
 * ]
 * const tree = buildTree(flat) // Returns tree with nested children
 */
export function buildTree<T extends FlatItem>(
  flatItems: T[],
  parentId: string | null = null
): (T & { children?: T[] })[] {
  const result: (T & { children?: T[] })[] = []

  for (const item of flatItems) {
    if (item.parentId === parentId) {
      const children = buildTree(flatItems, item.id)
      const node: T & { children?: T[] } = { ...item }
      if (children.length > 0) {
        node.children = children
      }
      result.push(node)
    }
  }

  return result
}

/**
 * Flatten a tree structure back to a flat array
 * Useful for operations that need to iterate over all nodes
 *
 * @param tree - Tree-structured array
 * @returns Flat array of all nodes
 *
 * @example
 * const flat = flattenTree(tree) // Returns all nodes in a flat array
 */
export function flattenTree<T extends TreeNodeBase>(tree: T[]): T[] {
  const result: T[] = []

  function traverse(nodes: T[]) {
    for (const node of nodes) {
      result.push(node)
      if (node.children && node.children.length > 0) {
        traverse(node.children as T[])
      }
    }
  }

  traverse(tree)
  return result
}

/**
 * Find a node by ID in a tree structure
 *
 * @param tree - Tree-structured array to search
 * @param id - ID of the node to find
 * @returns Found node or undefined
 *
 * @example
 * const node = findNodeById(tree, '123')
 */
export function findNodeById<T extends TreeNodeBase>(
  tree: T[],
  id: string
): T | undefined {
  for (const node of tree) {
    if (node.id === id) {
      return node
    }
    if (node.children && node.children.length > 0) {
      const found = findNodeById(node.children as T[], id)
      if (found) return found
    }
  }
  return undefined
}

/**
 * Get all ancestor IDs for a given node
 * Useful for expanding all parents when navigating to a specific node
 *
 * @param tree - Tree-structured array
 * @param targetId - ID of the target node
 * @returns Array of ancestor IDs (from root to parent)
 *
 * @example
 * const ancestors = getAncestorIds(tree, '123') // ['root', 'parent', ...]
 */
export function getAncestorIds<T extends TreeNodeBase>(
  tree: T[],
  targetId: string
): string[] {
  const ancestors: string[] = []

  function findPath(nodes: T[], path: string[]): boolean {
    for (const node of nodes) {
      if (node.id === targetId) {
        ancestors.push(...path)
        return true
      }
      if (node.children && node.children.length > 0) {
        if (findPath(node.children as T[], [...path, node.id])) {
          return true
        }
      }
    }
    return false
  }

  findPath(tree, [])
  return ancestors
}

/**
 * Filter a tree structure, keeping nodes that match the predicate
 * Also keeps ancestor nodes of matching nodes to maintain tree structure
 *
 * @param tree - Tree-structured array
 * @param predicate - Function to test each node
 * @returns Filtered tree with matching nodes and their ancestors
 *
 * @example
 * const filtered = filterTree(tree, (node) => node.name.includes('search'))
 */
export function filterTree<T extends TreeNodeBase>(
  tree: T[],
  predicate: (node: T) => boolean
): T[] {
  const result: T[] = []

  for (const node of tree) {
    // Check if this node matches
    const nodeMatches = predicate(node)

    // Check if any children match (recursively)
    let filteredChildren: T[] = []
    if (node.children && node.children.length > 0) {
      filteredChildren = filterTree(node.children as T[], predicate)
    }

    // Include node if it matches OR if it has matching descendants
    if (nodeMatches || filteredChildren.length > 0) {
      const newNode = { ...node } as T & { children?: T[] }
      if (filteredChildren.length > 0) {
        newNode.children = filteredChildren
      } else {
        delete newNode.children
      }
      result.push(newNode)
    }
  }

  return result
}

/**
 * Count total nodes in a tree structure
 *
 * @param tree - Tree-structured array
 * @returns Total count of all nodes
 *
 * @example
 * const total = countNodes(tree) // Returns total number of nodes
 */
export function countNodes<T extends TreeNodeBase>(tree: T[]): number {
  let count = 0

  function traverse(nodes: T[]) {
    for (const node of nodes) {
      count++
      if (node.children && node.children.length > 0) {
        traverse(node.children as T[])
      }
    }
  }

  traverse(tree)
  return count
}

/**
 * Count nodes with children (expandable nodes)
 *
 * @param tree - Tree-structured array
 * @returns Count of nodes that have children
 */
export function countExpandableNodes<T extends TreeNodeBase>(tree: T[]): number {
  let count = 0

  function traverse(nodes: T[]) {
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        count++
        traverse(node.children as T[])
      }
    }
  }

  traverse(tree)
  return count
}

/**
 * Get all expandable node IDs in a tree
 *
 * @param tree - Tree-structured array
 * @returns Array of IDs for nodes that have children
 */
export function getExpandableIds<T extends TreeNodeBase>(tree: T[]): string[] {
  const ids: string[] = []

  function traverse(nodes: T[]) {
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        ids.push(node.id)
        traverse(node.children as T[])
      }
    }
  }

  traverse(tree)
  return ids
}

/**
 * Get depth of a node in the tree
 *
 * @param tree - Tree-structured array
 * @param nodeId - ID of the node to find depth for
 * @returns Depth level (0 for root nodes) or -1 if not found
 */
export function getNodeDepth<T extends TreeNodeBase>(
  tree: T[],
  nodeId: string
): number {
  function findDepth(nodes: T[], currentDepth: number): number {
    for (const node of nodes) {
      if (node.id === nodeId) {
        return currentDepth
      }
      if (node.children && node.children.length > 0) {
        const found = findDepth(node.children as T[], currentDepth + 1)
        if (found !== -1) return found
      }
    }
    return -1
  }

  return findDepth(tree, 0)
}

/**
 * Get direct children count for a node
 *
 * @param node - Node to count children for
 * @returns Number of direct children
 */
export function getChildCount<T extends TreeNodeBase>(node: T): number {
  return node.children?.length ?? 0
}

/**
 * Get total descendants count for a node (all nested children)
 *
 * @param node - Node to count descendants for
 * @returns Total number of descendants
 */
export function getDescendantCount<T extends TreeNodeBase>(node: T): number {
  if (!node.children || node.children.length === 0) {
    return 0
  }
  return countNodes(node.children as T[])
}
