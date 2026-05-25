# Frontend Testing Standards

Mandatory:
- component rendering tests
- interaction tests
- accessibility validation
- hydration-safe rendering validation

Critical systems:
- motion systems
- orchestrators
- API mapping layers
- responsive systems

Never:
- rely purely on snapshot testing
- ignore hydration edge cases
- ignore responsive behavior

Testing priorities:
1. rendering stability
2. interaction safety
3. responsive integrity
4. accessibility
5. motion lifecycle cleanup
6. hydration consistency