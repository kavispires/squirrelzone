import clsx from 'clsx';
import { ReactNode } from 'react';
import './Content.scss';

type ContentProps = {
  /**
   * The content itself.
   */
  children: ReactNode;
  /**
   * The class name to apply to the content container.
   */
  className?: string;
};

/**
 * Wrapper for the content of the page
 */
export function Content({ children, className = '' }: ContentProps) {
  return <div className={clsx('content', className)}>{children}</div>;
}
