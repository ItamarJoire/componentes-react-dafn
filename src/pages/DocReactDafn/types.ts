export interface DocPropInfo {
  name: string
  type: string
  required: boolean
  defaultValue: string | null
  description: string
}

export interface DocComponentInfo {
  name: string
  description: string
  props: DocPropInfo[]
}

export type DocsManifest = Record<string, DocComponentInfo>

export interface DocNavItem {
  slug: string
  componentName: string
  label: string
}

export interface DocNavCategory {
  id: string
  label: string
  items: DocNavItem[]
}
