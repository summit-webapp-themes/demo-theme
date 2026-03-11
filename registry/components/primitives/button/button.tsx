import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// ─────────────────────────────────────────────
// CVA — variant definitions
// ─────────────────────────────────────────────

const buttonVariants = cva(
  // base styles applied to every button regardless of variant
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium whitespace-nowrap select-none',
    'rounded-md border border-transparent',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer',
  ],
  {
    variants: {
      /**
       * variant — visual style of the button
       *
       * primary   → filled, high emphasis (main CTA)
       * secondary → outlined, medium emphasis
       * tertiary  → underline link style, low emphasis
       * ghost     → no border/bg, subtle hover
       * danger    → destructive action
       */
      variant: {
        primary: [
          'bg-neutral-900 text-white border-neutral-900',
          'hover:bg-neutral-700 hover:border-neutral-700',
          'active:bg-neutral-800 active:scale-[0.98]',
          'focus-visible:ring-neutral-900',
        ],
        secondary: [
          'bg-transparent text-neutral-900 border-neutral-900',
          'hover:bg-neutral-100',
          'active:bg-neutral-200 active:scale-[0.98]',
          'focus-visible:ring-neutral-900',
        ],
        tertiary: [
          'bg-transparent text-neutral-900 border-transparent',
          'underline underline-offset-4',
          'hover:text-neutral-600',
          'active:text-neutral-800',
          'focus-visible:ring-neutral-900',
        ],
        ghost: [
          'bg-transparent text-neutral-900 border-transparent',
          'hover:bg-neutral-100',
          'active:bg-neutral-200 active:scale-[0.98]',
          'focus-visible:ring-neutral-900',
        ],
        danger: [
          'bg-red-600 text-white border-red-600',
          'hover:bg-red-500 hover:border-red-500',
          'active:bg-red-700 active:scale-[0.98]',
          'focus-visible:ring-red-600',
        ],
      },

      /**
       * size — spatial scale of the button
       */
      size: {
        sm: 'h-8 px-3 text-sm gap-1.5',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-9 text-lg',
        icon: 'h-10 w-10 p-0', // square icon-only button
      },

      /**
       * fullWidth — stretches button to fill its container
       */
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },

      /**
       * loading — visual loading state (overrides content with spinner)
       */
      loading: {
        true: 'cursor-wait',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      loading: false,
    },
  },
);

// ─────────────────────────────────────────────
// Spinner — internal loading indicator
// ─────────────────────────────────────────────

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

// ─────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /**
   * asChild — renders the button as its child element.
   * Use this when you need the button to render as a Next.js <Link>,
   * an <a> tag, or any other element while keeping button styles.
   *
   * @example
   * <Button asChild>
   *   <Link href="/shop">Shop Now</Link>
   * </Button>
   */
  asChild?: boolean;

  /**
   * loading — shows a spinner and disables interactions.
   * The button remains at its original width (no layout shift).
   */
  loading?: boolean;

  /**
   * loadingText — accessible label shown next to spinner during loading.
   * If not provided, original children are hidden and only spinner shows.
   *
   * @example loadingText="Submitting..."
   */
  loadingText?: string;

  /**
   * leftIcon — icon element rendered to the left of the label.
   *
   * @example leftIcon={<SearchIcon className="h-4 w-4" />}
   */
  leftIcon?: React.ReactNode;

  /**
   * rightIcon — icon element rendered to the right of the label.
   *
   * @example rightIcon={<ArrowRightIcon className="h-4 w-4" />}
   */
  rightIcon?: React.ReactNode;
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // variant props
      variant,
      size,
      fullWidth,
      loading = false,

      // content props
      loadingText,
      leftIcon,
      rightIcon,
      children,

      // radix slot
      asChild = false,

      // native button props
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          loading,
          className,
        })}
        {...props}
      >
        {/* Loading state */}
        {loading ? (
          <>
            <Spinner />
            {loadingText ? (
              <span>{loadingText}</span>
            ) : (
              // hide original label visually but keep for layout width
              <span className="opacity-0 select-none" aria-hidden="true">
                {children}
              </span>
            )}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="shrink-0" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="shrink-0" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export { Button, buttonVariants };
