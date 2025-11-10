interface SchemaRendererProps {
  schema: Record<string, any>
}

export function SchemaRenderer({ schema }: SchemaRendererProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
