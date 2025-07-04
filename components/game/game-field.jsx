import { clsx } from "clsx";
import { UiButton } from "../uikit/ui-button";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 ",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
            Ход: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex gap-1 items-center text-xs leading-tight text-slate-400">
            Следующий: <CrossIcon />
          </div>
        </div>
        <UiButton size="md" variant="primary">
          Ничья
        </UiButton>
        <UiButton size="md" variant="outline">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
}
