import * as z from "../../../../deps/zod/mod.ts";
import { AutoFormInputComponentProps } from "../types.ts";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../form.tsx";
import { RadioGroup, RadioGroupItem } from "../../../radio-group.tsx";

export default function AutoFormRadioGroup({
  label,
  isRequired,
  field,
  zodItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const values = (zodItem as unknown as z.ZodEnum<any>)._def.values;

  return (
    <FormItem className="space-y-3">
      <FormLabel>
        {label}
        {isRequired && <span className="text-destructive">*</span>}
      </FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-1"
          {...fieldProps}
        >
          {values.map((value: any) => (
            <FormItem
              className="flex items-center space-x-3 space-y-0"
              key={value}
            >
              <FormControl>
                <RadioGroupItem value={value} />
              </FormControl>
              <FormLabel className="font-normal">{value}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
