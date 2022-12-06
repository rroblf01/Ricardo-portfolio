interface objectTimeLine {
  title: string;
  date: string;
}
interface TimelineProps {
  listTimeLine: Array<objectTimeLine>;
}

export default function Timeline(props: TimelineProps) {
  return (
    <div className="flex sm:justify-center items-center flex-col text-center sm:flex-row sm:items-baseline mt-10">
      <div class="relative max-w-2xl">
        <div class="absolute top-0 h-full border-r-2 border-gray-500 left-3">
        </div>
        <ul class="space-y-10">
          {props.listTimeLine.map((el) => {
            return (
              <li>
                <div class="flex items-center">
                  <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                  <h5 class="ml-4 font-bold text-gray-600">{el.title}</h5>
                </div>
                <div class="ml-12">
                  <p class="text-sm text-gray-500 min-h-0">
                    {el.date}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
