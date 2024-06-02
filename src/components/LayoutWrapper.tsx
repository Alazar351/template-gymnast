export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto  max-w-[540px] md:max-w-[720px] tablet:max-w-[960px] lg:max-w-[1140px] ">
      {children}
    </div>
  );
}
