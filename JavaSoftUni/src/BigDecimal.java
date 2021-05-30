import java.math.BigDecimal;

class Main {
    public static void main(String[] args) {
        BigDecimal number = new BigDecimal("2.332");
        number = number.add(BigDecimal.valueOf(123));
    }
}
