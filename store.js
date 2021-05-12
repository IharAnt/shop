/* Всем хорош наш псевдокласс, вот только принципы инкапсуляции и
 * модульности нарушаются когда мы можем модифицировать
 * defaultOptions и options у экземпляра нашего объекта (forge)
 * ЗАДАЧА - сделайте defaultOptions и options приватными свойствами и не изменяемыми
 * Варианты решения могут быть разными
*/
export function Store (options = {}) {
    this.defaultOptions = {
        start: 1554293121
    }

    this.options = {
        ...this.defaultOptions,
        ...options
    }

    this.getEventStartDate = function () {
        return new Date(this.options.start).toLocaleDateString()
    }

    this.getEventStartTime = function () {
        return new Date(this.options.start).toLocaleTimeString()
    }
}