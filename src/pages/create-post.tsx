import { Formik, Form } from "formik";
import { Box, Button, theme } from "@chakra-ui/react";
import { InputField } from "../components/InputField";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useCreatePostMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { useIsAuth } from "../utils/useisAuth";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });
          console.log("err: ", error);
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="Text..."
                label="Body"
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme={theme.colors.teal}
            >
              Create Post
            </Button>
          </Form>
        )}
        )
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
