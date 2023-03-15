import AuthForm from "../../components/auth/AuthForm";
import authStyles from "../../styles/auth.css";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  if (authMode === "login") {
    //TODO:: login logic
  } else {
    // TODO:: sign up logic
  }
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: authStyles,
    },
  ];
}
