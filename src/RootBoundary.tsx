import { Heading, Img } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import not_found from "../public/server_down.png";
import errorImg from '../public/error.png'

export default function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Img src={not_found} />
          <Heading size={'md'} color={'red'}>Oh snap! page not found</Heading>
        </div>
      );
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Img src={errorImg} />
      <Heading size={'md'} color={'red'}>Oh snap! there was a bug on this page. Contact software admin</Heading>
    </div>
  );
}
