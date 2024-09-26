const lastChange = useRef();

function handleChange(e) {
  if (lastChange.current) {
    clearTimeout(lastChange.current);
  }

  lastChange.current = setTimeout(() => {
    lastChange.current = null;
    setSearchTerm(e.target.value);
  }, 300);
}
