import { cn } from "@polpi/lib"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Dispatch, ReactNode, SetStateAction, useMemo } from "react"
import { Tooltip } from "./tooltip"

export function Switch({
  fn,
  trackDimensions,
  thumbDimensions,
  thumbTranslate,
  checked = true,
  loading = false,
  disabled = false,
  disabledTooltip
}: {
  fn?: Dispatch<SetStateAction<boolean>> | ((checked: boolean) => void)
  trackDimensions?: string
  thumbDimensions?: string
  thumbTranslate?: string
  checked?: boolean
  loading?: boolean
  disabled?: boolean
  disabledTooltip?: string | ReactNode
}) {
  const switchDisabled = useMemo(() => {
    return disabledTooltip ? true : disabled || loading
  }, [disabledTooltip, disabled, loading])

  const switchRoot = (
    <SwitchPrimitive.Root
      checked={loading ? false : checked}
      name="switch"
      {...(fn && { onCheckedChange: fn })}
      disabled={switchDisabled}
      className={cn(
        "radix-state-checked:bg-color-500 radix-state-unchecked:bg-gray-200 relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-color-500 focus-visible:ring-opacity-75",
        "data-[disabled]:cursor-not-allowed",
        trackDimensions
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          `radix-state-checked:${thumbTranslate}`,
          "radix-state-unchecked:translate-x-0",
          `pointer-events-none h-4 w-4 translate-x-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`,
          thumbDimensions,
          thumbTranslate
        )}
      />
    </SwitchPrimitive.Root>
  )

  if (disabledTooltip) {
    return (
      <Tooltip content={disabledTooltip}>
        <div>{switchRoot}</div>
      </Tooltip>
    )
  }

  return switchRoot
}
