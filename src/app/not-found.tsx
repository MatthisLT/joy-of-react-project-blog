import { BLOG_TITLE } from '@/constants';
import Error from '@/components/Error';

export const metadata = {
  title: `404 Not found • ${BLOG_TITLE}`,
};

export default function NotFound() {
  return (
    <Error
      title="404 Not Found"
      message="This page does not exist. Please check the URL and try again."
    />
  );
}
