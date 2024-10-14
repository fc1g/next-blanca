import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

export default function PlaceSkeleton() {
  return (
    <div className="px-4 text-center sm:px-6 lg:px-12">
      <div className="my-16 grid gap-8 md:flex-row lg:grid-cols-2">
        <Skeleton className="h-[60vh] w-full" />

        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto flex w-full max-w-screen-sm flex-col items-center px-2">
            <Skeleton className="mb-4 h-10 w-[14.125rem]" />

            <Skeleton className="h-3 lg:h-6" />
          </div>

          <div className="mb-3 flex w-full flex-col items-center space-y-1 lg:mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-32" />
          </div>

          <Button variant="default" size="lg" asChild>
            <Skeleton className="w-32" />
          </Button>
        </div>
      </div>

      <Skeleton className="h-[85vh] w-full" />
    </div>
  );
}
