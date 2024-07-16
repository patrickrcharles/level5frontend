type SourceOfRepair = 'MBB' | 'MAB' | 'COMM' | 'DMISA';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type T = any;

interface SelectOption<Type> {
  label: string;
  value: Type;
  [key: string]: T;
}

interface DropMenuType {
  id: string;
  children: { name: string; to: string }[];
}

interface Summary {
  content: unknown[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  sort: null;
  first: boolean;
  numberOfElements: number;
}

type InferArrayType<Type> = Type extends (infer U)[] ? U : never;

type TransFormToArrayFields<Types> = {
  [K in keyof Types]: ({ index: number; fieldId: string } & InferArrayType<Types[K]>)[];
};

type FormField<Type> = { index: number; fieldId: string } & Type;
