public class exemples {

    public static void main(String[] args) {
        // write your code here
        int[] arr = { 1, 2, 2, 1, 2, 3 };
        int total = 0;
        // int apoliron=0;

        for (int i = 0; i < arr.length; i++) {
            total += Palindrom(i, i + 1, arr);
            total += Palindrom(i, i + 2, arr);
        }

        System.out.print(total);
    }

    public static int Palindrom(int start, int stop, int[] arr) {
        int sum = 0;

        if (stop >= arr.length || start < 0 || arr[start] != arr[stop]) {
            return sum;
        } else {
            sum++;
            // int bpoliron+=apoliron;
            return sum + Palindrom(start - 1, stop + 1, arr);

        }
    }
}
