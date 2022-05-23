// /movies/123 [id]가 123에 해당함

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router);
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 주소에서 값만 가져옴
export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
