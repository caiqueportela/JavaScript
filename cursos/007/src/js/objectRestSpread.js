const { angular, ...frameworks } = cursos;
console.log('angular', angular);
console.log('frameworks', frameworks);

const novosCuros = { angular, ...frameworks };
console.log('novos', novosCuros);