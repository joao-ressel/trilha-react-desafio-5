import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link {...otherProps} as={as} href={href}></Link>
    </>
  );
}
