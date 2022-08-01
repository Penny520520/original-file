import { createElement, CSSProperties, forwardRef } from 'react';
import { PropsWithChildren } from 'react';

type TypographyTagType = `p` | `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

interface ITypographyProps {
  tag?: TypographyTagType;
  className?: string;
  style?: CSSProperties;
}

export const Typography = forwardRef<
  HTMLElement,
  PropsWithChildren<ITypographyProps>
>(function TypographyComponent(
  { children, tag = `p`, className, style },
  ref
): JSX.Element {
  return createElement(tag, { className, ref, style }, children);
});

Typography.displayName = `Typography`;
