import useTitle from "../hooks/useTitle";

export default function Notice() {
  useTitle("Notice Board");
  return <div className="p-20 text-center text-blue-900 text-2xl font-bold">Notice Board — Coming Soon</div>;
}