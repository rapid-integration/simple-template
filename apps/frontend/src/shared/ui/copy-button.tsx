"use client";

import { CopyIcon } from "lucide-react";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import Button from "./button";
import { toast } from "./sonner";
import Tooltip from "./tooltip";

interface CopyButtonProps extends ComponentProps<typeof Button> {
  value: string;
  messages: {
    copy: ReactNode;
    success: ReactNode;
    error: ReactNode;
  };
}

const CopyButton: FunctionComponent<CopyButtonProps> = ({
  value,
  messages,
  ...otherProps
}) => {
  const handleCopy = () => {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(value);
      toast.success(messages.success);
    } else {
      toast.error(messages.error);
    }
  };

  return (
    <Tooltip disableHoverableContent>
      <Tooltip.Trigger asChild>
        <Button
          size="icon"
          variant="outline"
          onClick={handleCopy}
          {...otherProps}
        >
          <CopyIcon />
          <span className="sr-only">{messages.copy}</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="left">{messages.copy}</Tooltip.Content>
    </Tooltip>
  );
};

export default CopyButton;
