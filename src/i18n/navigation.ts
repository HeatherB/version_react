import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

// Export locale-aware navigation utilities
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
