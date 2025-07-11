import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

function InputRoot({ className, type, before, after, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      {before && (
        <div className="absolute top-1/2 left-3 -translate-y-1/2">{before}</div>
      )}
      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          before && "pl-9",
          (after || isPassword) && "pr-9",
          className,
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-md p-2.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <>
              <EyeOffIcon className="size-4" />
              <span className="sr-only">Скрыть пароль</span>
            </>
          ) : (
            <>
              <EyeIcon className="size-4" />
              <span className="sr-only">Показать пароль</span>
            </>
          )}
        </button>
      )}
      {after && !isPassword && (
        <div className="absolute top-1/2 right-3 -translate-y-1/2">{after}</div>
      )}
    </div>
  );
}

export { InputRoot };

const Input = InputRoot;

export default Input;
