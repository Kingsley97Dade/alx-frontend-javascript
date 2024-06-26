export default function guardrail(mathFunction) {
    const queue = [];
  
    try {
      const ans = mathFunction();
      queue.push(ans);
    } catch (e) {
      queue.push(`${e.name}: ${e.message}`);
    } finally {
      queue.push("Guardrail was processed");
    }
  
    return queue;
  }
