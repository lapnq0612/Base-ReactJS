class Utils {
    validateUsername(username: string) {
      return /^\w+$/.test(username);
    }

    classifyStatus (status: string): number{
      if(status == 'pending') return 1;
      else if (status == 'done') return 2;
      return 0;
    }

}