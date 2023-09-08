interface NavBtnProps {
  children: JSX.Element | string;
}
export function NavBtn({ children }: NavBtnProps) {
  return (
    <>
      <button type='button'>{children}</button>
    </>
  );
}
