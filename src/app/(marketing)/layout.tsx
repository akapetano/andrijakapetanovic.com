import AppLayout from "../../components/shared/AppLayout/AppLayout";

interface IDefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}
