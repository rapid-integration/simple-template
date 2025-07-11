"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import Label from "@/shared/ui/label";

const FormRoot = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem(props: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn(
        "mb-2 transition-colors data-[error=true]:text-destructive",
        className,
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("mt-2 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function FormMessage({
  className,
  ...props
}: React.ComponentProps<typeof motion.p>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  return (
    <AnimatePresence>
      {body && (
        <motion.p
          data-slot="form-message"
          id={formMessageId}
          initial={{
            height: 0,
            opacity: 0,
            y: -20,
          }}
          animate={{
            height: "auto",
            opacity: 1,
            y: 0,
          }}
          exit={{
            height: 0,
            opacity: 0,
            y: -20,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.15,
          }}
          className={cn("overflow-hidden text-sm text-destructive", className)}
          {...props}
        >
          <span className="mt-2 block">{body as React.ReactNode}</span>
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function FormResponse({
  className,
  ...props
}: React.ComponentProps<typeof motion.p>) {
  const form = useFormContext();
  const error = form.formState.errors.root;

  return (
    <AnimatePresence>
      {error?.message && (
        <motion.p
          data-slot="form-message"
          initial={{
            height: 0,
            opacity: 0,
            y: -20,
          }}
          animate={{
            height: "auto",
            opacity: 1,
            y: 0,
          }}
          exit={{
            height: 0,
            opacity: 0,
            y: -20,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.15,
          }}
          className={cn("overflow-hidden text-sm text-destructive", className)}
          {...props}
        >
          <span className="mt-4 block">{error.message as React.ReactNode}</span>
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormResponse,
  FormRoot,
  useFormField,
};

const Form = Object.assign(FormRoot, {
  Control: FormControl,
  Description: FormDescription,
  Response: FormResponse,
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Message: FormMessage,
  useField: useFormField,
});

export default Form;
