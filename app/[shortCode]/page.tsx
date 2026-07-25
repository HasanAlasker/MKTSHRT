interface Props {
  params: Promise<{ shortCode: string }>;
}

export default async function page({ params }: Props) {
  const { shortCode } = await params;

  // here i should call and endpoint that maps the short code and redirects
  return <div>{shortCode}</div>;
}
