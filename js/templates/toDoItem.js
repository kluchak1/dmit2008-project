import { toElement } from "./../utils/toElement";

function toDoItemTemplate (category, status, todo, start) {
    const template = `
    <section class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <ul class="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
        ${category}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
        ${status}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
        ${todo}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
        ${start}
        </li>
        </li>
    </ul>
    </section>
    `;
    return toElement(template);
}

export {toDoItemTemplate};