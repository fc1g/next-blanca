import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../ui/pagination';
import { Skeleton } from '../ui/skeleton';

export default function SurroundingPageSkeleton({ limit }: { limit: number }) {
  return (
    <>
      <div className="mx-auto mb-8 grid max-w-screen-xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: limit || 6 }, (_, i) => (
          <Card className="h-[24.25rem] w-full" key={i}>
            <CardHeader>
              <div className="mb-1 font-semibold leading-none tracking-tight">
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-48" />
              </div>
            </CardHeader>

            <CardContent>
              <Skeleton className="mt-1 h-48 w-full" />
            </CardContent>

            <CardFooter>
              <Button size="lg" asChild>
                <Skeleton className="w-[8.85rem]" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Skeleton className="h-9 w-[6.375rem] gap-1 pl-2.5" />
          </PaginationItem>

          <PaginationItem>
            <Skeleton className="h-9 w-[4.75rem] gap-1 pr-2.5" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
