import java.util.Scanner;

public class MetersKilometers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int meters = Integer.parseInt(scan.nextLine());
        double kilometers = (double) meters / 1000;
        System.out.printf("%.2f", kilometers);
    }
}
