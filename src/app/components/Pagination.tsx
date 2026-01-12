import Button from "@/app/components/Button";

type PaginationProps = {
  totalPages: number;
  actualPage: number;
  setActualPage: (page: number) => void;
}

export default function Pagination({ totalPages, actualPage, setActualPage }: PaginationProps) {
  return (
    <div className="flex gap-4">
      <Button className="w-24 bg-primary text-white hover:bg-primary/80" onClick={() => setActualPage(actualPage - 1)} disabled={actualPage === 1}>Previous</Button>
      <Button className="w-24 bg-primary text-white hover:bg-primary/80" onClick={() => setActualPage(actualPage + 1)} disabled={actualPage === totalPages}>Next</Button>
    </div>
  );
}