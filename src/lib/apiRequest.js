import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} created successfully`);
      reset();
      redirect();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("Error 409");
      } else {
        console.log(response);
        toast.error("Something went wrong");
      }
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}
