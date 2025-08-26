### A) Reset e Base (5 min)

```
{
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* ← Por que isso é importante? */
}
```


---

#### Por que `box-sizing: border-box;` é importante?

O `box-sizing: border-box;` redefine o modelo de caixa CSS para incluir *padding* e *border* dentro da largura e altura declaradas de um elemento. Isso facilita o controle do layout, evitando que o tamanho do elemento aumente além do esperado quando adicionamos bordas e espaçamentos internos.

Sem isso, o padrão `content-box` faz com que o padding e border fiquem fora da largura/altura, muitas vezes causando problemas de alinhamento e dimensionamento no layout, dificultando a criação de designs responsivos.

---

#### O que acontece sem o reset CSS?

- Os navegadores aplicam margens, padding e outros estilos padrão diferentes para cada elemento, levando a inconsistências visuais entre navegadores.
- Pode gerar espaços extras indesejados em torno dos elementos, como margens e padding aplicados automaticamente em parágrafos, títulos e listas.
- Os layouts ficam menos previsíveis, podendo demandar ajustes adicionais para corrigir esses espaços padrão.
- O reset CSS uniformiza esses estilos iniciais, criando uma base consistente para aplicar estilos personalizados de forma mais controlada e previsível.

---

Em suma, o reset CSS elimina estilos padrão imprevisíveis, e `box-sizing: border-box;` melhora o controle do tamanho dos elementos, simplificando o desenvolvimento e garantindo que o layout se comporte como esperado.
