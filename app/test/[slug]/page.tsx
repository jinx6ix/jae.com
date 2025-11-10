export default function TestPage({ params }: { params: { slug: string } }) {
    return <h1>Dynamic route: {params.slug}</h1>
  }
  