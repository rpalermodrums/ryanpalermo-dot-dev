/**
 * Preserves newlines in a string by replacing them with a placeholder,
 * which can be later replaced back to newlines.
 */
export const preserveNewlines = (text: string): string => {
  const newlinePlaceholder = '{{NEWLINE}}';
  return text.replace(/\n/g, newlinePlaceholder);
};

/**
 * Restores newlines in a string by replacing the placeholder with actual newlines.
 */
export const restoreNewlines = (text: string): string => {
  const newlinePlaceholder = '{{NEWLINE}}';
  return text.replace(/{{NEWLINE}}/g, '\n');
};

/**
 * A higher-order function that wraps a function to preserve newlines
 * before the function is called and restore them after.
 */
export const withPreservedNewlines = <T extends (...args: any[]) => string>(
  fn: T
): T => {
  return ((...args: Parameters<T>): string => {
    const preservedArgs = args.map(arg => 
      typeof arg === 'string' ? preserveNewlines(arg) : arg
    );
    const result = fn(...preservedArgs as Parameters<T>);
    return restoreNewlines(result);
  }) as T;
};
