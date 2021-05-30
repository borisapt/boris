import java.util.Scanner;

public class PoundsToDollars {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double dollars = Double.parseDouble(scan.nextLine());
        double pounds = dollars * 1.31;
        System.out.printf("%.3f", pounds);
    }
}
