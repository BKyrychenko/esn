const stripColors = ['bg-esn-pink', 'bg-esn-orange', 'bg-esn-green', 'bg-esn-blue']
const repeatedColors = Array.from({ length: 4 }, () => stripColors).flat()

export function BrandStrip() {
  return (
    <div className="flex w-full gap-1 bg-white" aria-hidden="true">
      {repeatedColors.map((colorClass, index) => (
        <div key={index} className={`h-1.5 flex-1 ${colorClass}`} />
      ))}
    </div>
  )
}
