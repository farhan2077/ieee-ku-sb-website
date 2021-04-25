import { Helmet } from 'react-helmet';

export default function MetaDecorator({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
