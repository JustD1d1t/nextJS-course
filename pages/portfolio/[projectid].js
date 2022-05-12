import { useRouter } from "next/router";

const PortoflioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  console.log(router.query.projectid);
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default PortoflioProjectPage;
