/**
 * Defines the configuration options for the date sorting function.
 */
export interface SortDateOptions {
  /**
   * If true, uses the modification date for sorting, with fallbacks.
   * @default false
   */
  useModifiedDate?: boolean;
}

/**
 * A type constraint to ensure an entry has the necessary date fields
 * for sorting.
 */
type EntryWithDates = {
  data: {
    dateCreated: Date;
    datePublished?: Date;
    dateModified?: Date;
  }
}

/**
 * A comparator function to sort blog posts in descending chronological order.
 * It infers the type of the post data directly from your `content.config.ts`.
 * @template T A type that extends `EntryWithDates`, like `CollectionEntry<'blog'>`.
 * @param options - Configuration to control the sort behavior.
 * @returns A number for the `Array.prototype.sort()`` method.
 */
export function sortByDate<T extends EntryWithDates>(options: SortDateOptions = {}): (a: T, b: T) => number {
  // Set a default value for the option.
  const { useModifiedDate = false } = options;

  return (a: T, b: T) => {
    let effectiveDateA: Date;
    let effectiveDateB: Date;

    if (useModifiedDate) {
      // Priority: Modified -> Published -> Created.
      effectiveDateA = a.data.dateModified || a.data.datePublished || a.data.dateCreated;
      effectiveDateB = b.data.dateModified || b.data.datePublished || b.data.dateCreated;
    }
    else {
      // Default priority: Published -> Created.
      effectiveDateA = a.data.datePublished || a.data.dateCreated;
      effectiveDateB = b.data.datePublished || b.data.dateCreated;
    }

    // Sort in descending order (newest items will appear first).
    // If `b` is more recent (larger timestamp) than `a`, this
    // returns a positive number, which mean 'b' will be sorted before 'a'.
    return effectiveDateB.getTime() - effectiveDateA.getTime();
  }
}

export function formatDate(dateString: string | Date | null | undefined): string | null {
  if (!dateString) return null;

  try {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Bangkok',
      timeZoneName: 'short',
    });
  }
  catch (error) {
    console.error(`Invalid date provided to formatDate: ${dateString}`, error);
    return null;
  }
}