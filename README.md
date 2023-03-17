# blog

# React Lifecycle / useEffect

원래 class에서만 사용가능 했는데 2019년도 이후에 lifecycle function을 이용할 수 있게 됐다. ⇒ 이 역할을 해주는게 **useEffect** 함수!  리액트에서 유용한 function들을 **React Hook**이라 부른다.

**react lifecycle** 

사람으로 치면 태어나서 자라고 죽을 때까지 과정을 **라이프사이클**이라고 하는데 리액트에서 라이프 사이클이란 어떤 의미인지 같이 알아보자.

![ogimage.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1704557c-ce0a-4e02-9cfe-26acc4e22864/ogimage.png)

컴포넌트의 Lifrcycle(생명주기) 사람에 빗대어서 인생주기 - 컴포넌트 인생

1. 컴포넌트가 보이는 순간을 컴포넌트가 mount된다 or 장착이 된다고 표현
2. 컴포넌트 안에서 state를 조작하면 update
3. 

### Mounting

- 앱이 막 시작돼서 로드가 되고 있을때, 컴포넌트가 시작될 때
- render( ) UI 그려주는 함수
- componentDidMountuse는 기본적으로 앱 실행후 첫번째 렌더 후에 한 번 실행된다. 여기에선 주로 화면에 처음 보여줘야할 데이터들에 대한 api를 호출한다.
- 배열안에 여러개의 state가 있다면 배열 안에 state중 하나라도 업데이트가 되면 해당 useEffect가 호출이 된다. 하지만 여러개의 state가 동시에 업데이트 되었다 해도 한번만 호출이 된다.

### Updating

- State가 업데이트 / UI 업데이트 될 때 (앱이 활용되고 있을 때)
- componentDidUpdateuse 두번째 매개변수인 배열에 state가 들어가 있다면 state값이 바뀔때마다 호출되는 componentDidUpdate 의 역할을 한다. state가 바뀌고 렌더후 호출된다

### UnMounting

- 앱이 죽을 때

각각의 스텝에서 리액트가 제공하는 많은 lifecycle 함수들이 있다

**constructure**가 첫번째로 호출되는 리액트 라이프 사이클 함수 ⇒ 앱이 실행될 때 constructure 먼저 호출하고 들어간다. 

컴포넌트의 라이프 사이클을 알고있으면 중간중간 간섭을 할 수 있다. (코드 실행)

컴포넌트가 장착될 때 특정 코드를 실행 하거나, 업데이트 될 때 실행 또는 삭제될 때 실행 등 이프사이클을 이용하면 재미있는 기능들을 구현할 수 있다.

useEffect 사용하는 이유

- useEffect 안에 있는 코드는 html이 다 렌더링 다 된 이후에 실행된다.
- 자바스크립트는 위에서 부터 차례대로 코드를 한 줄씩 읽는다.

함수의 핵심기능 외에 쓸데없는 기능들을 프로그래밍 용어로 side effect라고 부른다. 그래서 useEffect도 거기서 따온건데 컴포넌트의 핵심 기능은 html 렌더링이라 **그거 외의 쓸데없는 기능들은 useEffect 안에** 적어주는 게 좋다. 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머 다는거 등 이런건 useEffect로 많이 사용한다.
