
### Coding guidelines
1. Use className for styling, ID only when necessary which allows CSS module with hashing className on production build.
2. Always have local className define differently in order to avoid className scope confliction. This comes from the fact that hashing will differentate className within scope of its parent component. 

**For example:**
This code
```
// Header.js
<div className={styles.nav}>
  <div className={classes([layout.box])}>
  </div>
</div>
```
uses `styles` as local stylesheet and `layout` imported from global stylesheet, where `box` class is defined like below.
```
// Header.sass
.nav .box
  display: flex
```

If we bundle this without hashing className, it will works since the className hasn't change. With hasing, the specific element with the class will break.

The solution is to create a new local className and apply multiple classes

```
// Header.js
<div className={styles.nav}>
  <div className={classes([layout.box, styles.navInner])}>
  </div>
</div>
```
and in Sass
```
// Header.sass
.nav .navInner
  display: flex
```