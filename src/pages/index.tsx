import Layout from "../components/Layout";
import {Container, Typography} from "@material-ui/core";

export default function Index() {
  return (
    <Layout>
        <Container maxWidth={'lg'}>
            <Typography variant={"h3"}>Alza Tech Friday JAMstack demo</Typography>
            <Typography variant={"body1"}>this is JAMstack demo project</Typography>
        </Container>
    </Layout>
  );
}
