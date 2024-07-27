import { cn } from "@/utils";

type InputErrorProps = {
  children: React.ReactNode;
  className?: string;
};

export const InputError = ({ children, className }: InputErrorProps) => {
  return (
    <p className={cn("text-sm text-start text-red-600 mt-1 pl-1", className)}>
      {children}
    </p>
  );
};
